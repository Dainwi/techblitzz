import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="bg-gradient-to-r from-primary to-primary-foreground py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Elevate Your Mind, Enrich Your Life
            </h1>
            <p className="text-lg text-primary-foreground md:text-xl lg:text-2xl">
              Discover insights and perspectives to help you grow, thrive, and live with intention.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                prefetch={false}
              >
                Read the Latest
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                prefetch={false}
              >
                Explore Categories
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.jpeg"
              width={600}
              height={400}
              alt="Hero Image"
              className="rounded-lg object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </header>
    <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tight mb-6 md:mb-8 lg:mb-10">Latest Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.jpeg"
                  width={400}
                  height={250}
                  alt="Post Thumbnail"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: "400/250", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  The Power of Mindfulness: Unlocking Inner Peace
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Discover how mindfulness can transform your life and help you find inner peace in the midst of
                  chaos.
                </p>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.jpeg"
                  width={400}
                  height={250}
                  alt="Post Thumbnail"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: "400/250", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  Stoicism: The Ancient Philosophy for Modern Life
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the timeless wisdom of Stoicism and learn how to cultivate resilience, equanimity, and inner
                  strength.
                </p>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.jpeg"
                  width={400}
                  height={250}
                  alt="Post Thumbnail"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: "400/250", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  The Psychology of Happiness: Cultivating Lasting Joy
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Discover the science-backed strategies for building a life of lasting happiness and fulfillment.
                </p>
              </div>
            </Link>
            <Link href="#" className="group" prefetch={false}>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.jpeg"
                  width={400}
                  height={250}
                  alt="Post Thumbnail"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: "400/250", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  The Art of Effective Communication: Mastering the Essentials
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Improve your interpersonal skills and learn how to communicate with clarity, empathy, and impact.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold tracking-tight mb-6 md:mb-8 lg:mb-10">Popular Tags</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Mindfulness
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Stoicism
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Happiness
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Communication
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Personal Growth
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              Philosophy
            </Link>
          </div>
          <h2 className="text-2xl font-bold tracking-tight mt-8 mb-6 md:mb-8 lg:mb-10">Popular Categories</h2>
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8">
            <Link
              href="#"
              className="inline-flex items-center justify-between rounded-md bg-muted px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <span>Self-Improvement</span>
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-between rounded-md bg-muted px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <span>Philosophy</span>
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-between rounded-md bg-muted px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <span>Psychology</span>
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
    
  </div>
)
}

function ChevronRightIcon(props: any) {
return (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)
}