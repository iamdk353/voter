"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { LucideLoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  ADDHAR: z.string().email(),
  name: z.string().min(8, "Name must be at least 8 characters long"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits long")
    .max(10, "Phone number must be at most 10 digits long"),
});

export const Addhar = () => {
  const [load, setLoad] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      ADDHAR: "",
      name: "",
      phoneNumber: "",
    },
    resolver: zodResolver(formSchema),
  });

  // watch fields so we can enable the submit button only when all values are filled
  const [watAddhar, watName, watPhone] = form.watch([
    "ADDHAR",
    "name",
    "phoneNumber",
  ]) as [string | undefined, string | undefined, string | undefined];

  const canProceed =
    !!watAddhar &&
    watAddhar.toString().trim().length == 12 &&
    !!watName &&
    watName.toString().trim().length > 0 &&
    !!watPhone &&
    watPhone.toString().trim().length == 10;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full flex flex-col items-center">
        <p className="my-8 text-xl font-bold tracking-tight">
          VERIFY YOUR ADDHAR TO PROCEED
        </p>

        <Form {...form}>
          <form className="w-full space-y-4">
            <FormField
              control={form.control}
              name="ADDHAR"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ADDHAR NUMBER</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      maxLength={12}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      placeholder="ADDHAR NUMBER"
                      className="w-full"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value
                          .slice(0, 12)
                          .replace(/[^0-9]/g, "");
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name As in Addhar</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number Linked Addhar</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Number"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              onClick={() => {
                router.push("/app/Booth/verification");
                localStorage.setItem("addhar", watAddhar || "");
              }}
              className="mt-4 w-full flex text-center"
              disabled={load || !canProceed}
            >
              {load ? (
                <LucideLoaderCircle className="animate-spin" />
              ) : (
                "Proceed"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
