import Container from "../../components/container";
import Image from "next/image";

const images = [
  {
    src: "/imagess/gallery/gate.png",
    title: "Main Gate",
    note: "Welcome to Neutral Demo School",
  },
  { src: "/imagess/gallery/classroom.jpeg", title: "Classrooms", note: "Learning spaces" },
  { src: "/imagess/gallery/students-learning.jpeg", title: "Students", note: "Student life" },
  { src: "/imagess/gallery/science-lab.jpeg", title: "Facilities", note: "Our campus" },

];

export default function GalleryPage() {
  return (
    <Container>
      <div className="py-14">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Gallery
          </h1>
          <p className="mt-4 text-gray-600 sm:text-lg">
            A glimpse into campus life, facilities, and learning activities.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-xl border bg-white"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-medium">{img.title}</p>
                <p className="mt-1 text-sm text-gray-600">{img.note}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-gray-500">
          Tip: Replace the images in <span className="font-medium">public/images/gallery</span>{" "}
          and update the filenames in this page.
        </p>
      </div>
    </Container>
  );
}

