import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext();
    return (
        <div className="space-y-12">
            <div className="flex flex-col gap-6 md:flex-row">
                <FormField
                    // control={form.control}
                    name="productName"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Name</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input 
                                placeholder="Example: Air Force 1's 1997" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    // control={form.control}
                    name="productCode"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Code</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input 
                                placeholder="Example: S2116SW-A8I-36" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

            </div>

            
            <div className="flex flex-col gap-6 md:flex-row">
                <FormField
                    // control={form.control}
                    name="productPrice"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Price (RM)</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input
                                type="number" 
                                placeholder="369.90" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    // control={form.control}
                    name="productStock"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Stock</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input
                                type="number" 
                                placeholder="50" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

            </div>

            <div className="flex flex-col gap-6 md:flex-row">
                <FormField
                    // control={form.control}
                    name="productPrice"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Price (RM)</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input
                                type="number" 
                                placeholder="369.90" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    // control={form.control}
                    name="productStock"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Stock</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input
                                type="number" 
                                placeholder="50" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

            </div>


            <div className="flex flex-col gap-6 md:flex-row">
                <FormField
                    // control={form.control}
                    name="productPrice"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Price (RM)</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input
                                type="number" 
                                placeholder="369.90" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    // control={form.control}
                    name="productStock"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Stock</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input
                                type="number" 
                                placeholder="50" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

            </div>


            <div className="flex flex-col gap-6 md:flex-row">
                <FormField
                    // control={form.control}
                    name="productPrice"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Price (RM)</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input
                                type="number" 
                                placeholder="369.90" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    // control={form.control}
                    name="productStock"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Stock</FormLabel>
                        <FormControl>
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md border bg-primary-50">
                                <Input
                                type="number" 
                                placeholder="50" 
                                className="border-none bg-primary-50 h-[50px] focus-visible:ring-offset-0 placeholder:text-grey-500 px-4 pb-2 text-[16px] border focus-visible:ring-transparent"
                                {...field} 
                                />
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

            </div>
        </div>
    );
};

export default DetailsSection;