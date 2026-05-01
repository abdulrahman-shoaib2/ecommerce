'use client';
import { Button } from "../../ui/button";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Form from 'next/form'
import Icon from "@/components/shared/Icon";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function SearchBarClient({radius}:{radius?:{input?:string;button?:string}}) {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  let timer: ReturnType<typeof setTimeout>;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    if (!query) {
      e.preventDefault()
    }
    const delay = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    await delay(500);
    setIsLoading(false);
    clearTimeout(timer);
  }

  return (
    <Form action="/search" className="flex flex-1 max-w-2xl" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <Input
          name="q"
          type="text"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products, brands and more..."
          className={cn(`w-full h-10! px-5 py-3 pr-12 border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm select-none peer`,radius?.input||'rounded-full')}
        />
        <Button
          type="submit"
          disabled={!query.trim()}
          className={cn(`absolute right-1 top-1/2 -translate-y-1/2! w-9 h-9 bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors disabled:bg-primary-600/50 peer-focus:bg-primary-600 active:scale-[90%] disabled:opacity-100`,radius?.button||'rounded-full')}
        >
          {
            isLoading ?
              <Loader2 className="animate-spin w-5 h-5 " />
              :
              <Icon icon={faSearch} classNames={{ icon: 'fa-magnifying-glass' }} />
          }
        </Button>
      </div>
    </Form>

  )
}
