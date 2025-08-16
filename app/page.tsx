'use client'

import { useState } from 'react'

interface FileItem {
  id: string
  name: string
  size: string
  type: string
  downloads: number
  rating: number
  lastUpdated: string
  description: string
  icon: string
}

const sampleFiles: FileItem[] = [
  {
    id: '1',
    name: 'Adobe Photoshop 2024',
    size: '2.5 GB',
    type: 'برنامج تصميم',
    downloads: 15420,
    rating: 4.8,
    lastUpdated: '2024-01-15',
    description: 'أحدث إصدار من برنامج التصميم الاحترافي',
    icon: '🎨'
  },
  {
    id: '2',
    name: 'Microsoft Office 365',
    size: '1.8 GB',
    type: 'برنامج مكتبي',
    downloads: 8920,
    rating: 4.6,
    lastUpdated: '2024-01-10',
    description: 'حزمة برامج المكتب الشاملة',
    icon: '📄'
  },
  {
    id: '3',
    name: 'Visual Studio Code',
    size: '85 MB',
    type: 'محرر نصوص',
    downloads: 23450,
    rating: 4.9,
    lastUpdated: '2024-01-12',
    description: 'محرر النصوص الأكثر شعبية للمطورين',
    icon: '💻'
  },
  {
    id: '4',
    name: 'Adobe Premiere Pro',
    size: '3.2 GB',
    type: 'برنامج فيديو',
    downloads: 6780,
    rating: 4.7,
    lastUpdated: '2024-01-08',
    description: 'برنامج تحرير الفيديو الاحترافي',
    icon: '🎬'
  }
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('الكل')
  const [sortBy, setSortBy] = useState('downloads')

  const categories = ['الكل', 'برنامج تصميم', 'برنامج مكتبي', 'محرر نصوص', 'برنامج فيديو']

  const filteredFiles = sampleFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'الكل' || file.type === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    switch (sortBy) {
      case 'downloads':
        return b.downloads - a.downloads
      case 'rating':
        return b.rating - a.rating
      case 'name':
        return a.name.localeCompare(b.name, 'ar')
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">📁 موقع التحميل</h1>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="text-sm text-gray-600">
                <span className="font-medium">15420</span> تحميل اليوم
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">892</span> ملف متاح
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن البرامج والملفات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="downloads">الأكثر تحميلاً</option>
                <option value="rating">الأعلى تقييماً</option>
                <option value="name">حسب الاسم</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">إجمالي التحميلات</p>
                <p className="text-2xl font-bold text-gray-900">54,320</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">📁</span>
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">الملفات المتاحة</p>
                <p className="text-2xl font-bold text-gray-900">892</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">متوسط التقييم</p>
                <p className="text-2xl font-bold text-gray-900">4.7</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">👥</span>
              </div>
              <div className="mr-4">
                <p className="text-sm text-gray-600">المستخدمين النشطين</p>
                <p className="text-2xl font-bold text-gray-900">12,450</p>
              </div>
            </div>
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedFiles.map((file) => (
            <div key={file.id} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{file.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{file.name}</h3>
                    <p className="text-sm text-gray-600">{file.type}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-2">{file.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-sm text-gray-600">📦 {file.size}</span>
                  <span className="text-sm text-gray-600">📥 {file.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm font-medium text-gray-900 mr-1">{file.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">آخر تحديث: {file.lastUpdated}</span>
                <button className="btn-primary">
                  تحميل
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedFiles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600">جرب تغيير معايير البحث أو الفئة</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">© 2024 موقع تحميل الملفات والبرامج. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}