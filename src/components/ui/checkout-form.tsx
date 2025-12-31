"use client"

import { CreditCard, MapPin, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/CartContext"

export default function CheckoutForm() {
    const { cart, cartTotal } = useCart();
    const deliveryFee = 15;
    const taxes = 25;
    const finalTotal = cartTotal + deliveryFee + taxes;

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] bg-background p-6">
            <Card className="w-full max-w-md shadow-xl border-2 border-foreground rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-xl font-display tracking-wide">ORDER SUMMARY</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">

                    {/* Cart Items List */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium font-body">Your Items</span>
                        </div>
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm py-1">
                                <span className="text-muted-foreground">{item.name}</span>
                                <span className="font-medium">{item.price}</span>
                            </div>
                        ))}
                        {cart.length === 0 && <p className="text-sm text-muted-foreground italic">Your cart is empty.</p>}
                    </div>

                    <Separator />

                    {/* Shipping Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Delivery Address</span>
                        </div>
                        <p className="text-sm text-muted-foreground">742 Evergreen Terrace</p>
                        <p className="text-sm text-muted-foreground">Springfield, USA</p>
                    </div>

                    <Separator />

                    {/* Payment Method Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Billing Method</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Mastercard</p>
                        <p className="text-sm text-muted-foreground">**** **** **** 1234</p>
                    </div>

                    <Separator />

                    {/* Promo Code Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Tag className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Apply Discount Code</span>
                        </div>
                        <div className="flex gap-2">
                            <Input placeholder="Enter discount code" className="flex-1" />
                            <Button variant="secondary">Redeem</Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Payment Summary */}
                    <div>
                        <span className="text-sm font-medium">Order Total</span>
                        <div className="grid grid-cols-2 gap-y-2 text-sm mt-2">
                            <span className="text-muted-foreground">Item Total:</span>
                            <span className="text-right font-medium">₹{cartTotal}</span>
                            <span className="text-muted-foreground">Delivery Fee:</span>
                            <span className="text-right font-medium">₹{deliveryFee}</span>
                            <span className="text-muted-foreground">Taxes:</span>
                            <span className="text-right font-medium">₹{taxes}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Footer Checkout */}
            <div className="w-full max-w-md mt-4 flex items-center justify-between rounded-xl border-2 border-foreground px-6 py-4 bg-card shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl font-display font-bold text-primary">₹{finalTotal}</span>
                <Button className="px-8 btn-poster-filled h-auto py-2">PLACE ORDER</Button>
            </div>
        </div>
    )
}
