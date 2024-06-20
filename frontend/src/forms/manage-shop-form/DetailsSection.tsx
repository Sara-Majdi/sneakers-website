import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext();

    const [selectedCategory, setSelectedCategory] = useState<string>('men');

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const womenSizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12]
    const menSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14]
    const kidsSizes = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7]

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
                                placeholder="Example: Air Force 1's 1996" 
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
                    name="productCategory"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Category</FormLabel>
                        <FormControl>
                            <div className="grid grid-cols-2 md:grid-cols-3  gap-2">
                                <label className="flex items-center p-4 border rounded-md gap-2 h-[50px] bg-white">
                                    <Checkbox
                                        // onCheckedChange={field.onChange}
                                        // checked={field.value} 
                                        checked={selectedCategory === 'men'}
                                        onCheckedChange={() => handleCategoryClick('men')}
                                        id="men" className="mr-2 h-5 w-5 border border-primary" />

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                        <path fill="none" stroke="black" d="M14 24v-6.5a2 2 0 0 1 2-2v-8s-1.5-1-4-1s-4 1-4 1v8a2 2 0 0 1 2 2V24m1.85-19.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"/>
                                    </svg>

                                    <p className="font-inter font-medium">Men</p>
                                </label>
                                <label className="flex items-center p-4 border rounded-md gap-1 h-[50px] bg-white " >
                                    <Checkbox
                                        // onCheckedChange={field.onChange}
                                        // checked={field.value}
                                        checked={selectedCategory === 'women'}
                                        onCheckedChange={() => handleCategoryClick('women')}
                                        id="women" className="mr-2 h-5 w-5 border border-primary" />

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                        <path fill="none" stroke="black" d="M10 24v-5.5H6.5v-.25l.072-.15A25 25 0 0 0 9 7.35v-.328a8.58 8.58 0 0 1 3-.523c1.288 0 2.311.266 3 .523v.328c0 3.72.83 7.391 2.428 10.749l.072.15v.25H14V24M11.85 4.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"/>
                                    </svg>

                                    <p className="font-inter font-medium">Women</p>
                                </label>
                                <label className="flex items-center p-4 border rounded-md gap-2 h-[50px] bg-white ">
                                    <Checkbox
                                        // onCheckedChange={field.onChange}
                                        // checked={field.value}
                                        checked={selectedCategory === 'kids'}
                                        onCheckedChange={() => handleCategoryClick('kids')}
                                        id="kids" className="mr-2 h-5 w-5 border border-primary " />

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                        <path fill="black" d="M15.75 19.13c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 11.25c-1.24 0-2.25-.84-2.25-1.87c0-1.04 1.01-1.88 2.25-1.88s2.25.84 2.25 1.88c0 1.03-1.01 1.87-2.25 1.87m-3.75 7.88c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 8.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M18.75 12c-.32 0-.63.07-.91.2c-.48-.61-1.13-1.13-1.91-1.53c.57-.8.91-1.77.91-2.82v-.06c1.09-.23 1.91-1.2 1.91-2.37c0-1.33-1.09-2.42-2.42-2.42c-.69 0-1.33.29-1.75.75a4.81 4.81 0 0 0-5.16 0C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42c0 1.16.82 2.13 1.9 2.37v.06c0 1.05.35 2.03.91 2.82c-.77.4-1.42.92-1.9 1.53A2.24 2.24 0 0 0 3 14.25c0 1.25 1 2.25 2.25 2.25h.06c-.04.24-.06.5-.06.75c0 2.07 1.34 3.75 3 3.75c1.01 0 1.9-.63 2.45-1.59c.42.06.85.09 1.3.09s.88-.03 1.3-.09c.55.96 1.44 1.59 2.45 1.59c1.66 0 3-1.68 3-3.75c0-.25-.02-.51-.06-.75h.06c1.25 0 2.25-1 2.25-2.25S20 12 18.75 12"/>
                                    </svg>

                                    <p className="font-inter font-medium">Kids</p>
                                </label>
                            </div>
                        
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    // control={form.control}
                    name="productSizes"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Sizes</FormLabel>
                        <FormControl>
                            <div className="grid grid-cols-2 md:grid-cols-4  gap-1.5">
                                {selectedCategory == 'men' && menSizes.map(size => (
                                    <label className="flex items-center p-4 border rounded-md gap-2 h-[50px] bg-white ">
                                        <Checkbox
                                            // onCheckedChange={field.onChange}
                                            // checked={field.value}
                                            id="men" className="mr-2 h-5 w-5 border border-primary " />

                                        <p className="font-inter font-medium">{`UK ${size}`}</p>
                                    </label>
                                ))}

                                {selectedCategory == 'women' && womenSizes.map(size => (
                                    <label className="flex items-center p-4 border rounded-md gap-2 h-[50px] bg-white ">
                                        <Checkbox
                                            // onCheckedChange={field.onChange}
                                            // checked={field.value}
                                            id="men" className="mr-2 h-5 w-5 border border-primary " />

                                        <p className="font-inter font-medium">{`UK ${size}`}</p>
                                    </label>
                                ))}

                                {selectedCategory == 'kids' && kidsSizes.map(size => (
                                    <label className="flex items-center p-4 border rounded-md gap-2 h-[50px] bg-white ">
                                        <Checkbox
                                            // onCheckedChange={field.onChange}
                                            // checked={field.value}
                                            id="men" className="mr-2 h-5 w-5 border border-primary " />

                                        <p className="font-inter font-medium">{`UK ${size}`}</p>
                                    </label>
                                ))}
                                
                                
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
                    name="productDescription"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Description</FormLabel>
                        <FormControl className="h-72">
                            <div className="flex-center h-[50px] w-full overflow-hidden rounded-md  bg-primary-50">
                                <Textarea 
                                    placeholder={
                                        `Example:${'\n'}Step into a classic. This AJ4 throws it back with full-grain and synthetic leathers and premium textiles. Lush colors and metallic pops update the icon, while original design elements-like floating eyestays and mesh-inspired accents-feel just as fresh as they did in '89.`
                                    }                         



                                    className="bg-primary-50 flex flex-1 placeholder:text-grey-500  px-5 py-3  focus-visible:ring-transparent h-full text-[16px]"
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
                    name="productPrice"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel className="text-xl">Product Tags</FormLabel>
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

            </div>


            <div className="flex flex-col gap-6 md:flex-row">
                

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