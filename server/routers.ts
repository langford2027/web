import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import {
  getAllPrograms,
  getProgramById,
  getProgramsByCategory,
  getAllNews,
  getNewsById,
  getAllTeachers,
  getTeacherById,
  createRegistration,
  getRegistrationsByUserId,
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  programs: router({
    list: publicProcedure.query(async () => {
      return getAllPrograms();
    }),
    byId: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return getProgramById(input);
      }),
    byCategory: publicProcedure
      .input(z.string())
      .query(async ({ input }) => {
        return getProgramsByCategory(input);
      }),
  }),

  news: router({
    list: publicProcedure.query(async () => {
      return getAllNews();
    }),
    byId: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return getNewsById(input);
      }),
  }),

  teachers: router({
    list: publicProcedure.query(async () => {
      return getAllTeachers();
    }),
    byId: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return getTeacherById(input);
      }),
  }),

  registrations: router({
    create: protectedProcedure
      .input(
        z.object({
          programId: z.number(),
          firstName: z.string(),
          lastName: z.string(),
          email: z.string().email(),
          phone: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return createRegistration({
          userId: ctx.user.id,
          programId: input.programId,
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phone: input.phone,
        });
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      return getRegistrationsByUserId(ctx.user.id);
    }),
  }),
});

export type AppRouter = typeof appRouter;
