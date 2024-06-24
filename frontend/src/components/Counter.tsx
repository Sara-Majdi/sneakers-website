import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className='flex h-[38px]'>                          
        <Button className='  border border-black rounded-t-sm rounded-tr-none rounded-b-sm rounded-br-none h-full'
        onClick={() => {
            setCount(Math.max(count - 1, 0));
            }} >
            <Minus width={20} />
        </Button>

        <Button className=' border border-black rounded-none h-[px]' >
            {count}
        </Button>

        <Button className='  border border-black rounded-sm rounded-b-sm rounded-l-none h-full' 
        onClick={() => {
            setCount(count + 1);
            }}>
            <Plus width={20}  />
        </Button>
    </div> 

  );
}
