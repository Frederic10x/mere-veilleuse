import Logo from '@/components/navigation/components/Logo'
import Menu from '@/components/navigation/components/Menu'

export default async function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__inner">
        <Logo />
        <Menu />
      </div>
    </div>
  )
}
