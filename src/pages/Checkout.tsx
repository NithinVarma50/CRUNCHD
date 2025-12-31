import CheckoutForm from "@/components/ui/checkout-form";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Checkout = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Simple Header */}
            <div className="p-6 border-b border-foreground/10 flex items-center gap-4">
                <Link to="/" className="text-foreground hover:text-primary transition-colors flex items-center gap-2 font-display text-lg">
                    <ArrowLeft size={20} />
                    BACK TO MENU
                </Link>
                <div className="ml-auto font-display text-2xl text-primary">CRUNCHD CHECKOUT</div>
            </div>

            <CheckoutForm />
        </div>
    );
};

export default Checkout;
