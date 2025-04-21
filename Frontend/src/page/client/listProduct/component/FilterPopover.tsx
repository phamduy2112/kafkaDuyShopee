import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useRef, useState, useEffect } from "react";

export default function FilterPopover() {
    const [open, setOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const phoneBrands = ['iPhone', 'Samsung', 'Xiaomi']
    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Điện thoại')
    const [priceRange, setPriceRange] = useState<[number, number]>([1000000, 5000000])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={popoverRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
            >
                Lọc
            </button>

            {open && (
                <div className="absolute z-10 mt-3 w-[700px] bg-white border rounded shadow-lg p-4">
                    {/* Tam giác chỉ lên nút */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-l border-t"></div>

                    {/* Nội dung popover */}
                    <div className=''>
                        <div className="space-y-4">
                            <label className="font-semibol text-[1rem]">Hãng</label>

                            <div className="flex gap-[1rem]">
                                <Button variant={"outline"}>Iphone</Button>
                                <Button variant={"outline"}>Iphone</Button>
                                <Button variant={"outline"}>Iphone</Button>
                                <Button variant={"outline"}>Iphone</Button>
                                <Button variant={"outline"}>Iphone</Button>
                            </div>

                           
                            <div className="border-t flex gap-[1rem]">
                                <div className="w-[49%] border">
                                    <label className="font-semibol text-[1rem] block">Giá</label>
                                    <div className="flex flex-wrap gap-2">
                                        <Button variant={"outline"}>Dưới 2 triệu</Button>
                                        <Button variant={"outline"}>Từ 2 - 4 triệu</Button>
                                        <Button variant={"outline"}>Từ 2 - 4 triệu</Button>
                                        <Button variant={"outline"}>Từ 2 - 4 triệu</Button>
                                    </div>
                                    <div className="text-[.9rem] py-2">Hãy chọn giá tùy chỉnh</div>
                                    <Slider
                                        value={priceRange}
                                        onValueChange={(val) => setPriceRange(val as [number, number])}
                                        min={0}
                                        max={10000000}
                                        step={500000}
                                        minStepsBetweenThumbs={1}
                                        className="w-full"
                                    />
                                    <div className="flex justify-between text-sm mt-2">
                                        <span>Giá từ: {priceRange[0].toLocaleString()}₫</span>
                                        <span>đến: {priceRange[1].toLocaleString()}₫</span>
                                    </div>
                                </div>
                                <div className="w-[49%] border">
                                    <div>
                                        <label className="font-semibol text-[1rem] block">Loại điện thoại</label>
                                        <div className="flex flex-wrap gap-2">
                                            <Button variant={"outline"}>Android</Button>
                                            <Button variant={"outline"}>Iphone</Button>

                                        </div>

                                    </div>
                                    <div className="py-[.5rem]">
                                        <label className="font-semibol text-[1rem] block">Tần số quét</label>
                                        <div className="flex flex-wrap gap-2">
                                            <Button variant={"outline"}>60 Hz</Button>
                                            <Button variant={"outline"}>144 HZ</Button>
                                            <Button variant={"outline"}>90 HZ</Button>
                                            <Button variant={"outline"}>120 HZ</Button>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="border-t flex gap-[1rem]">
                                <div className="w-[49%] border">
                                    <label className="font-semibol text-[1rem] block">RAM</label>
                                    <div className="flex flex-wrap gap-2">
                                        <Button variant={"outline"}>3GB</Button>
                                       
                                    </div>
                                 
                                </div>
                                <div className="w-[49%] border">
                                    <div>
                                        <label className="font-semibol text-[1rem] block">Duong lượng lưu trữ</label>
                                        <div className="flex flex-wrap gap-2">
                                            <Button variant={"outline"}>64GB</Button>
                                            <Button variant={"outline"}>Iphone</Button>

                                        </div>

                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
