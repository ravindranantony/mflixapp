/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IzlQOOYuqCL
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">MFlix</h1>
        <nav className="space-x-4">
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="#">
            Sign in
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="#">
            Sign Up
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="#">
            Shop
          </Link>
          <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="#">
            Contact Us
          </Link>
        </nav>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Featured Titles</h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
        </div>
        <h2 className="text-xl font-semibold mb-4">Other Titles</h2>
        <div className="grid grid-cols-4 gap-4">
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <img
            alt="Video thumbnail"
            className="rounded-lg cursor-pointer"
            height="200"
            src="/placeholder.jpg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
        </div>
      </main>
    </div>
  )
}
