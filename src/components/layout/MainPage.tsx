import { PageTitle } from '@/components/ui/PageTitle'
import { ResetButton } from '@/components/ui/ResetButton'
import { MainContent } from '@/components/layout/MainContent'

export const MainPage = () => {
  return (
    <main>
      <PageTitle />
      <ResetButton />
      <MainContent />
    </main>
  )
}
