import FeaturesLayout from "@/components/layouts/features-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FeaturesLayout>
      {children}
    </FeaturesLayout>
  )
}