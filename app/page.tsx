import { createClient } from '@/app/utils/supabase/server'

export default async function HomePage() {
  const supabase = await createClient()

  // Destructure BOTH data and error
  const { data: courses, error } = await supabase.from('courses').select()

  // Add this console log
  if (error) {
    console.error("Error fetching courses:", error)
  }
  console.log("Fetched courses:", courses) // This will likely show []

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Available Courses</h1>
      <div className="mt-6">
        {courses?.map((course) => (
          <div key={course.id} className="p-4 mb-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
