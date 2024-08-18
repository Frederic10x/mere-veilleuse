import Logo from '@/components/navigation/components/logo'
import Menu from '@/components/navigation/components/menu'

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
