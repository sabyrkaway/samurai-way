import { PageTitle } from '@/components/PageTitle'
import { ResetButton } from '@/components/ResetButton'
import { MainContent } from '@/components/MainContent'

export const MainPage = () => {
  return (
    <main>
      <PageTitle />
      <ResetButton />
      <MainContent />
    </main>
  )
}
