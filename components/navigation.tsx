"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMedia } from "react-use";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavButton from "@/components/nav-button";
import { Button } from "@/components/ui/button";

const routes = [
  { href: "/", label: "Overview" },
  { href: "/transactions", label: "Transactions" },
  { href: "/accounts", label: "Accounts" },
  { href: "/categories", label: "Categories" },
  { href: "/settings", label: "Settings" },
];
const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="focus-visible:ring-offset-0  focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none"
          >
            <Menu className=" size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"bottom"} className=" px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                variant={route.href === currentPath ? "secondary" : "ghost"}
                key={route.href}
                onClick={() => onClick(route.href)}
                className="w-full"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={currentPath === route.href}
        />
      ))}
    </nav>
  );
};

export default Navigation;
