"use client"

type SidebarProps = {
  children: string|JSX.Element|Array<string|JSX.Element>
}

type SidebarButtonProps = {
  title: string
}

export const SidebarButton = (props: SidebarButtonProps) => {
  const {title} = props;
  return (
    <a href={`#${title}`} className="flex items-center px-3 py-1 text-gray-900 dark:text-white hover:font-bold">
      <span className="text-bold">{title}</span>
    </a>
  );
}

const Sidebar = (props: SidebarProps) => {
  const {children} = props;
  return (
    <aside id="Sidebar" className="fixed right-0 sm:right-8 md:right-24 lg:right-36 xl:right-60 top-1/4 h-min my-4 transition-transform sm:translate-x-0 translate-x-full" aria-label="Sidebar">
      <div className="h-min overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {(children instanceof Array)?children.map((e:any)=>(<li>{e}</li>)):children}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;