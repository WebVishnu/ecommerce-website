"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Country, State, City } from "country-state-city";

// Define RazorpayResponse Type
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Define RazorpayOptions Type
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

interface CheckoutData {
  shipping: {
    address: string;
    country: string;
    state: null | string;
    city: null | string;
    pin: null | string;
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

// Define a fallback component for loading state
const Loading = () => <div>Loading...</div>;

function CheckoutComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get("name");
  const originalPrice = searchParams.get("originalPrice");
  const salePrice = searchParams.get("salePrice");
  const initialQuantity = searchParams.get("quantity");
  const imageUrl = searchParams.get("imageUrl");
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    shipping: {
      address: "",
      country: "India",
      state: null,
      city: null,
      pin: null,
    },
  });

  const [quantity, setQuantity] = useState(Number(initialQuantity) || 1);
  const [isRazorpayReady, setIsRazorpayReady] = useState(false);
  useEffect(() => {
    if (!name || !originalPrice) {
      router.replace("/");
    }
  }, [name, originalPrice, router]);

  const [address, setAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    pinCode: "",
    country: "",
    phoneNumber: "",
  });
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const generateOrderId = () => {
    return `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const [orderId] = useState(generateOrderId());

  const handleQuantityChange = (type: string) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  const totalPrice = (Number(salePrice || originalPrice) * quantity).toFixed(2);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      setIsRazorpayReady(true); // Set state when Razorpay is ready
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
    };
    document.body.appendChild(script);
  }, []);

  const handleRazorpayPayment = async () => {
    if (!isRazorpayReady) {
      alert("Razorpay SDK is still loading. Please wait...");
      return;
    }

    const options: RazorpayOptions = {
      key: "rzp_test_EkdZaedpnLu4rz",
      amount: Number(totalPrice) * 100,
      currency: "INR",
      name: "Your Store",
      description: `Order ID: ${orderId}`,
      order_id: "", // Include the generated order ID here
      handler: function (response: RazorpayResponse) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        alert(`Order ID: ${orderId}`);
      },
      prefill: {
        name: "Your Name",
        email: "your-email@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="grid grid-cols-5 gap-6 max-w-[1200px] mx-auto px-6 pt-12">
      <div className="sm:col-span-3 col-span-5">
        <h1 className="font-bold">Your Information</h1>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="flex flex-col">
            <span className="text-sm">Name</span>
            <input
              type="text"
              placeholder="full name"
              className="border-2 py-2 px-4"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Mobile number</span>
            <input
              type="text"
              placeholder="number"
              className=" border-2 py-2 px-4"
            />
          </div>
        </div>
        <p className="text-xs mt-3">
          By providing your mobile, you agree to receive marketing
          communications from Vitco. <br /> For more about how we use your
          information, see our Privacy Policy.
        </p>
        <h1 className="font-bold mt-5">Shipping Address</h1>
        <div>
          <select
            name="country"
            id="country"
            className="border-2 py-2 px-4 w-full mt-5"
            disabled
          >
            <option value="india">India</option>
          </select>
          <div className="flex flex-col mt-3">
            <input
              type="text"
              placeholder="street address*"
              className=" border-2 py-2 px-4"
            />
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col mt-3">
              <select
                name="state"
                id="state"
                className="border-2 py-2 px-4"
                onChange={(e) => {
                  if (e.target.value != "null")
                    setCheckoutData({
                      ...checkoutData,
                      shipping: {
                        ...checkoutData.shipping,
                        state: e.target.value,
                      },
                    });
                }}
              >
                <option value="null">Select State</option>
                {State.getStatesOfCountry("IN").map((state, index) => (
                  <option key={index} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mt-3">
              <select
                name="city"
                id="city"
                className="border-2 py-2 px-4"
                onChange={(e) => {
                  if (e.target.value != "null")
                    setCheckoutData({
                      ...checkoutData,
                      shipping: {
                        ...checkoutData.shipping,
                        city: e.target.value,
                      },
                    });
                }}
              >
                <option value="null">Select city</option>
                {City.getCitiesOfState(
                  "IN",
                  String(checkoutData.shipping.state ?? "")
                ).map((city,index) => (
                  <option key={index} value={city.name}>{city.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mt-3">
              <input
                type="number"
                placeholder="pin code*"
                className=" border-2 py-2 px-4"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full mt-5">
          <button
            className="py-2 px-5 bg-primary rounded-full text-white"
            onClick={handleRazorpayPayment}
          >
            Make Payment
          </button>
        </div>
      </div>

      <div className="bg-gray-100 sm:col-span-2 col-span-5 px-6 py-3">
        <h1 className="font-bold flex justify-between">
          <span>Cart summary</span>
          <span>₹14,485.00</span>
        </h1>
        <div className="mt-5">
          <div className="flex gap-5 border-b-2  py-3">
            <Image
              src={imageUrl || "/fallback-image.png"}
              alt="Product"
              width={200}
              height={200}
              className="rounded-md object-cover h-16 w-16"
            />
            <div className="flex flex-col">
              <p className="">V-BOND MILK ANALYZER</p>
              <p className="text-sm">Qty : 5</p>
              <p>₹ 55000</p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="flex justify-between">
            <span>Sub total: (1)</span>
            <span>₹14,485.00</span>
          </h1>
          <h1 className="flex justify-between">
            <span>Setup charges:</span>
            <span>₹2000.00</span>
          </h1>
          <h1 className="flex justify-between border-b-2 pb-3">
            <span>Est. delivery:</span>
            <span>2 days</span>
          </h1>
          <h1 className="flex justify-between mt-5">
            <span>Order Total:</span>
            <span>₹16,485.00</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

// Wrap CheckoutComponent with Suspense in the main export
export default function Checkout() {
  return (
    <Suspense fallback={<Loading />}>
      <CheckoutComponent />
    </Suspense>
  );
}
