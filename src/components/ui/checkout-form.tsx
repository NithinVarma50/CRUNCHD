"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/CartContext"
import { UtensilsCrossed, CheckCircle2, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

export default function CheckoutForm() {
    const { cart, cartTotal } = useCart(); // Ideally clearCart would be here too
    const [tableNumber, setTableNumber] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const navigate = useNavigate();

    const taxes = Math.round(cartTotal * 0.05);
    const finalTotal = cartTotal + taxes;

    const handlePlaceOrder = () => {
        if (!tableNumber) {
            toast.error("Please enter your Table Number!");
            return;
        }
        if (cart.length === 0) {
            toast.error("Your plate is empty!");
            return;
        }

        setIsProcessing(true);

        // Mock network request
        setTimeout(() => {
            setIsProcessing(false);
            setIsOrderPlaced(true);
            toast.success("Order Sent to Kitchen! 🔥");
        }, 2000);
    };

    if (isOrderPlaced) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] bg-background p-6 animate-in fade-in zoom-in duration-500">
                <Card className="w-full max-w-md shadow-xl border-2 border-primary/20 rounded-2xl text-center p-8 bg-card">
                    <div className="flex justify-center mb-6">
                        <div className="rounded-full bg-green-100 p-4">
                            <CheckCircle2 className="w-16 h-16 text-green-600" />
                        </div>
                    </div>
                    <h2 className="font-display text-4xl text-primary mb-2">ORDER PLACED!</h2>
                    <p className="text-muted-foreground font-body text-lg mb-6">
                        Table <span className="font-bold text-foreground">#{tableNumber}</span> is set.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg mb-6">
                        <p className="text-sm font-medium">Order ID: <span className="font-mono">#CRUNCH-{Math.floor(Math.random() * 10000)}</span></p>
                        <p className="text-xs text-muted-foreground mt-1">Kitchen is prepping your crunch.</p>
                    </div>
                    <Button
                        className="w-full btn-poster"
                        onClick={() => navigate("/")}
                    >
                        ORDER MORE ITEMS
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] bg-background p-6">
            <Card className="w-full max-w-md shadow-xl border-2 border-foreground rounded-2xl transition-all duration-300">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl font-display tracking-wide flex items-center justify-center gap-2">
                        <UtensilsCrossed /> TABLE ORDER
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">Dine-in Order</p>
                </CardHeader>
                <CardContent className="space-y-6">

                    {/* Cart Items List */}
                    <div className="bg-secondary/20 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-bold font-body uppercase tracking-wider">Your Items</span>
                        </div>
                        {cart.length === 0 ? (
                            <p className="text-sm text-muted-foreground italic text-center py-4">Your cart is empty.</p>
                        ) : (
                            <div className="space-y-2">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between text-sm">
                                        <span className="text-foreground/80">{item.name}</span>
                                        <span className="font-medium">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Separator />

                    {/* Table Details Section */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Table Number</label>
                        <Input
                            type="number"
                            placeholder="Ex. 5"
                            className="text-lg font-bold"
                            min={1}
                            value={tableNumber}
                            onChange={(e) => setTableNumber(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground mt-1">Found on the table sticker.</p>
                    </div>

                    <Separator />

                    {/* Payment Summary */}
                    <div>
                        <div className="grid grid-cols-2 gap-y-2 text-sm mt-2">
                            <span className="text-muted-foreground">Item Total:</span>
                            <span className="text-right font-medium">₹{cartTotal}</span>
                            <span className="text-muted-foreground">Taxes (5%):</span>
                            <span className="text-right font-medium">₹{taxes}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Footer Checkout */}
            <div className="w-full max-w-md mt-4 flex items-center justify-between rounded-xl border-2 border-foreground px-6 py-4 bg-card shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase">Total to Pay</span>
                    <span className="text-2xl font-display font-bold text-primary">₹{finalTotal}</span>
                </div>
                <Button
                    className="px-6 btn-poster-filled h-auto py-3 text-sm md:text-base min-w-[140px]"
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                >
                    {isProcessing ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> SENDING...
                        </>
                    ) : (
                        "PLACE ORDER"
                    )}
                </Button>
            </div>
        </div>
    )
}
