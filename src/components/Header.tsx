'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [open, setOpen] = useState(false);
    const scrolled = useScroll(10);
    const { cart } = useCart();
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
        } else {
            // If on checkout page, go home first
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(id);
                el?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
            }, 100);
        }
    };

    const handleCartClick = () => {
        navigate("/checkout");
        setOpen(false);
    }

    const links = [
        { label: 'MENU', id: 'menu' },
        { label: 'REVIEWS', id: 'reviews' },
        { label: 'LOCATION', id: 'location' },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 mx-auto w-full border-b border-transparent md:transition-all md:ease-out',
                {
                    'bg-black/95 backdrop-blur-lg border-white/10 shadow-xl': scrolled && !open,
                    'bg-black': !scrolled && !open,
                    'bg-black/90': open,
                }
            )}
        >
            <div className={cn(
                "mx-auto w-full px-6 flex items-center justify-between transition-all duration-300",
                scrolled ? "max-w-7xl py-3" : "max-w-[1920px] py-6"
            )}>
                {/* Logo */}
                <div
                    className="bg-white px-3 py-1 -skew-x-6 cursor-pointer hover:scale-105 transition-transform select-none"
                    onClick={() => navigate("/")}
                >
                    <h1 className="font-display text-3xl text-black tracking-wider skew-x-6">
                        CRUNCHD
                    </h1>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollToSection(link.id)}
                            className={cn(
                                "font-display text-xl tracking-wide text-white hover:text-primary transition-colors hover:scale-105 transform relative group",
                                link.id === 'location' ? "bg-primary text-white font-display text-lg tracking-wider px-6 py-2 rounded-sm hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_#ffffff] hover:shadow-[2px_2px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px]" : ""
                            )}
                        >
                            {link.id === 'location' ? 'Find Location' : link.label}
                            {link.id !== 'location' && (
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            )}
                        </button>
                    ))}

                    {/* Cart Icon */}
                    <button
                        onClick={handleCartClick}
                        className="relative text-white hover:text-primary transition-colors p-2"
                        title="View Cart / Checkout"
                    >
                        <ShoppingBag size={28} />
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full animate-bounce">
                                {cart.length}
                            </span>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* Mobile Cart Icon */}
                    <button
                        onClick={handleCartClick}
                        className="relative text-white hover:text-primary transition-colors p-2"
                    >
                        <ShoppingBag size={24} />
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </button>

                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setOpen(!open)}
                        className="text-white hover:bg-white/10 hover:text-white"
                    >
                        <MenuToggleIcon open={open} className="size-8" duration={300} />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'fixed top-[88px] right-0 bottom-0 left-0 z-40 bg-black flex flex-col overflow-hidden transition-all duration-300 md:hidden',
                    open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
                    {links.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollToSection(link.id)}
                            className={cn(
                                "font-display text-5xl text-white hover:text-primary transition-colors tracking-widest",
                                link.id === 'location' ? "font-display text-3xl bg-white text-black px-12 py-4 rounded-sm shadow-[6px_6px_0px_#cc0000] mt-8" : ""
                            )}
                        >
                            {link.id === 'location' ? 'FIND LOCATION' : link.label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
