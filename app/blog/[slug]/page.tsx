import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Client, Databases } from "appwrite";


interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  author: string;
  content: string;
  image?: string;
}



export default async function Page() {



  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('6694d7e7003491b18c98'); // Your project ID

  const databases = new Databases(client);

  const result = await databases.listDocuments(
    '6694e0fd0014dc3a6f44', // databaseId
    '6694e24f00089d362812', // collectionId
    [] // queries (optional)
  );

  console.log(Response);



  return (
    <div className="bg-background">
      <header className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The Complete Guide to Web Development in 2024
            </h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">John Doe</span>
              </div>
              <Separator orientation="vertical" />
              <span className="text-sm">August 16, 2024</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-[3fr,1fr] md:gap-12 lg:py-16">
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <p>
            In the ever-evolving landscape of web development, 2024 promises to be a year of exciting advancements and
            innovative technologies. From the rise of AI-powered tools to the continued dominance of JavaScript
            frameworks, the world of web development is poised for a transformative shift.
          </p>
          <h2 className="font-bold text-xl mt-3">The Ascent of AI-Powered Development</h2>
          <p>
            One of the most significant trends in web development for 2024 is the integration of artificial intelligence
            (AI) into the development process. AI-powered tools are revolutionizing the way developers approach tasks,
            from automated code generation to intelligent debugging and optimization.
          </p>
          <Image
            src="/placeholder.jpeg"
            width={1200}
            height={600}
            alt="AI-powered development"
            className="rounded-lg object-cover my-6"
            style={{ aspectRatio: "1200/600", objectFit: "cover" }}
          />
          <h2 className="font-bold text-xl mt-3">The Continued Dominance of JavaScript Frameworks</h2>
          <p>
            JavaScript frameworks, such as React, Angular, and Vue.js, have firmly established their place in the web
            development ecosystem. These powerful tools continue to evolve, offering developers enhanced performance,
            scalability, and developer experience.
          </p>
          <p>
            As the demand for dynamic and responsive web applications grows, the adoption of these frameworks is
            expected to soar, with developers leveraging their robust feature sets and vibrant communities to build
            cutting-edge web experiences.
          </p>
          <h2 className="font-bold text-xl mt-3">The Rise of WebAssembly</h2>
          <p>
            WebAssembly, a low-level, binary-encoded language, has been gaining traction in the web development
            community. This performance-oriented technology allows developers to write code in languages like Rust, C++,
            and others, and then compile it to run on the web, offering significant performance improvements over
            traditional JavaScript-based applications.
          </p>
          <p>
            As WebAssembly continues to evolve and gain wider adoption, it will likely become a crucial tool in the web
            developer&apos;s arsenal, particularly for building high-performance, resource-intensive applications.
          </p>
          <h2 className="font-bold text-xl mt-3">The Importance of Accessibility</h2>
          <p>
            In 2024, the focus on web accessibility will become even more pronounced. Developers will need to prioritize
            creating user-friendly, inclusive experiences that cater to users with diverse abilities and needs.
          </p>
          <p>
            This will involve incorporating accessibility best practices, leveraging assistive technologies, and
            ensuring that web applications adhere to established standards and guidelines, such as the Web Content
            Accessibility Guidelines (WCAG).
          </p>
          <h2 className="font-bold text-xl mt-3">Conclusion</h2>
          <p>
            The world of web development is poised for an exciting and transformative year in 2024. From the rise of
            AI-powered tools to the continued dominance of JavaScript frameworks and the emergence of WebAssembly, the
            landscape is ripe for innovation and progress.
          </p>
          <p>
            As developers navigate these trends, the importance of accessibility and creating inclusive web experiences
            will remain a critical focus. By embracing these advancements and best practices, web developers can build
            the next generation of cutting-edge, user-centric web applications.
          </p>
        </article>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Related Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Link href="#" className="group grid grid-cols-[48px,1fr] items-start gap-4" prefetch={false}>
                  <Image
                    src="/placeholder.jpeg"
                    width={48}
                    height={48}
                    alt="Blog post thumbnail"
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium group-hover:underline">
                      The Future of Web Development: Trends and Predictions
                    </h4>
                    <p className="text-xs text-muted-foreground">August 10, 2024</p>
                  </div>
                </Link>
                <Link href="#" className="group grid grid-cols-[48px,1fr] items-start gap-4" prefetch={false}>
                  <Image
                    src="/placeholder.jpeg"
                    width={48}
                    height={48}
                    alt="Blog post thumbnail"
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium group-hover:underline">
                      Mastering the Art of Responsive Web Design
                    </h4>
                    <p className="text-xs text-muted-foreground">July 28, 2024</p>
                  </div>
                </Link>
                <Link href="#" className="group grid grid-cols-[48px,1fr] items-start gap-4" prefetch={false}>
                  <Image
                    src="/placeholder.jpeg"
                    width={48}
                    height={48}
                    alt="Blog post thumbnail"
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium group-hover:underline">
                      The Rise of WebAssembly and Its Impact on Web Development
                    </h4>
                    <p className="text-xs text-muted-foreground">June 15, 2024</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>Web Development</span>
                  <span className="text-xs text-muted-foreground">12</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>JavaScript</span>
                  <span className="text-xs text-muted-foreground">8</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>Frameworks</span>
                  <span className="text-xs text-muted-foreground">6</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>AI</span>
                  <span className="text-xs text-muted-foreground">4</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>Accessibility</span>
                  <span className="text-xs text-muted-foreground">3</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}