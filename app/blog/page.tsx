import Link from "next/link"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination"
import Image from "next/image"

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
            <p className="text-lg text-primary-foreground/80">
              Discover the latest insights, trends, and stories from our team of experts.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                    Mastering React: A Comprehensive Guide
                  </Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  In this comprehensive guide, we&apos;ll dive deep into the world of React, exploring its core concepts,
                  best practices, and advanced techniques to help you become a React master.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                    Unleashing the Power of Tailwind CSS
                  </Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  Discover how Tailwind CSS can revolutionize your web development workflow. Learn to create beautiful,
                  responsive, and maintainable user interfaces with ease.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                    Exploring the Serverless Revolution
                  </Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  Dive into the world of serverless computing and learn how it can simplify your application development
                  and deployment process. Discover the benefits and best practices of going serverless.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                    Optimizing Website Performance
                  </Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  Learn proven techniques to optimize your website&apos;s performance, from image optimization to code
                  minification. Ensure your users have a fast and seamless experience.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                    Mastering Git: A Version Control Superpower
                  </Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  Dive into the world of Git and learn how to harness its power as a version control system. Become a
                  Git pro and streamline your development workflow.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpeg"
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                    Lorem ipsum
                  </Link>
                </h2>
                <p className="text-muted-foreground line-clamp-3">
                  Discover how artificial intelligence is transforming the web development landscape. Learn about the
                  latest AI-powered tools and techniques to enhance your development workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </div>
  )
}