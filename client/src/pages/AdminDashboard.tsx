import { useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit2, Trash2, Eye } from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('programs');

  // Fetch data
  const { data: programs } = trpc.programs.list.useQuery();
  const { data: news } = trpc.news.list.useQuery();
  const { data: teachers } = trpc.teachers.list.useQuery();

  // Check if user is admin
  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600">You do not have permission to access this page.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your institute's content and programs</p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="news">News & Events</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
          </TabsList>

          {/* Programs Tab */}
          <TabsContent value="programs">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">Programs</h2>
                <Button className="bg-[#E21E26] hover:bg-[#D01820] text-white">
                  <Plus size={20} className="mr-2" />
                  Add Program
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Instructor</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Enrolled</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs?.map((program: any) => (
                      <tr key={program.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{program.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 capitalize">{program.category}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{program.duration}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{program.instructor}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{program.enrolled}/{program.capacity}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye size={16} />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit2 size={16} />
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {!programs || programs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No programs found. Create your first program!</p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">News & Events</h2>
                <Button className="bg-[#E21E26] hover:bg-[#D01820] text-white">
                  <Plus size={20} className="mr-2" />
                  Add News
                </Button>
              </div>

              <div className="grid gap-4">
                {news?.map((item: any) => (
                  <Card key={item.id} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-black mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{item.content}</p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded capitalize">
                            {item.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${item.isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {item.isPublished ? 'Published' : 'Draft'}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Edit2 size={16} />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {!news || news.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No news found. Create your first news item!</p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* Teachers Tab */}
          <TabsContent value="teachers">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">Teachers</h2>
                <Button className="bg-[#E21E26] hover:bg-[#D01820] text-white">
                  <Plus size={20} className="mr-2" />
                  Add Teacher
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teachers?.map((teacher: any) => (
                  <Card key={teacher.id} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                      <h3 className="font-semibold text-black mb-1">{teacher.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{teacher.specialization}</p>
                      <p className="text-xs text-gray-500 mb-4">{teacher.experience}</p>
                      <div className="flex gap-2 justify-center">
                        <Button variant="outline" size="sm">
                          <Edit2 size={16} />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {!teachers || teachers.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No teachers found. Add your first teacher!</p>
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
