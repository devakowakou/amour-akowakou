"use client"

import Header from "@/app/components/ui/Header";
import { Button } from "@/components/ui/button";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { useState } from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import BlogListe from "@/app/components/list/BlogListe";

type Themetype = {
    label: string,
    value: string
}

export default function Blog() {


    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")


    const [valueSubliste, setValueSubliste] = useState("")
    const [openSubliste, setOpenSubliste] = useState(false)

    const themes = [
        {
            label: "programmation",
            value: "programmation"

        },
        {
            label: "administration système",
            value: "administration système",

        },
        {
            label: "base de donnée",
            value: "base de donnée",
        },
        {
            label: "Autre",
            value: "Autre",
        },
    ]

    let sousthemes: Themetype[] = []

    const programmationTheme = [
        {
            label: "python",
            value: "python"
        },
        {
            label: "framework back",
            value: "framework back"
        },
    ]

    const databaseTheme = [
        {
            label: "mysql ou postgreSql ou mongo",
            value: "mysql ou postgresql ou mongo"
        },
        {
            label: "administarteur DB",
            value: "administarteur BD"
        }
    ]
    const administrationSysteme = [
        {
            label: "admin system",
            value: "admin system"
        },
        {
            label: "ubuntu",
            value: "ubuntu"
        }
    ]

    if (value === "programmation") {
        sousthemes = programmationTheme
    } else if (value === "administration système") {
        sousthemes = administrationSysteme
    }
    else if (value === "base de donnée") {
        sousthemes = databaseTheme
    }
    return (
        <div className="  text-foreground py-20 h-full">
            <Header />
            <div style={{ backgroundImage: "url(/blog/fond7.jpg)" }} className=" bg-cover bg-center bg-no-repeat ">
                <div className=" bg-black/70 w-full h-full p-5 md:p-20 md:pb-5 text-center space-y-5">
                    <h1 className=" text-4xl md:text-6xl p-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-900 flex justify-center gap-2">   Bienvenue sur le blog du leader </h1>
                    <p className=" text-slate-300">
                        Bienvenue sur le blog d’Akowakou Dev — votre source d’astuces, de tutoriels et 
                        d’analyses autour du développement web, des technologies modernes et des bonnes pratiques en programmation.
                        Ici, nous partageons notre expérience, nos découvertes et nos conseils pour vous aider à rester à la pointe et à transformer vos 
                        projets en réussites.
                    </p>

                    <div className=" flex flex-col md:flex-row gap-2 justify-center">
                        <div>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-[200px] justify-between"
                                    >
                                        {value
                                            ? themes.find((framework) => framework.value === value)?.label
                                            : "choisissez un theme..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="recherher..." />
                                        <CommandList>
                                            <CommandEmpty>pas de theme choisie.</CommandEmpty>
                                            <CommandGroup>
                                                {themes.map((framework) => (
                                                    <CommandItem
                                                        key={framework.value}
                                                        value={framework.value}
                                                        onSelect={(currentValue) => {
                                                            setValueSubliste("")
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                value === framework.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        {framework.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <Popover open={openSubliste} onOpenChange={setOpenSubliste}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openSubliste}
                                        className="w-[200px] justify-between"
                                    >
                                        {valueSubliste
                                            ? sousthemes.find((framework) => framework.value === valueSubliste)?.label
                                            : "choisissez un sous..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="recherher..." />
                                        <CommandList>
                                            <CommandEmpty>pas de theme choisie.</CommandEmpty>
                                            <CommandGroup>
                                                {sousthemes.map((framework) => (
                                                    <CommandItem
                                                        key={framework.value}
                                                        value={framework.value}
                                                        onSelect={(currentValue) => {
                                                            setValueSubliste(currentValue === valueSubliste ? "" : currentValue)
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                valueSubliste === framework.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        {framework.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div>
                        <Button className=" bg-blue-500 text-white">Explorer le blog</Button>
                    </div>
                </div>
            </div>

            <div className=" p-5 md:p-10 py-5">
                <Card className=" p-2 md:p-5 bg-background">
                    <div className=" flex flex-col md:flex-row gap-5 items-center justify-around">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">catégorie</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/components">{value || "tous"}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{valueSubliste || 'tous'}</BreadcrumbPage>
                                </BreadcrumbItem>

                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className=" flex items-center gap-2">
                            <Input className="md:w-80" type="search" placeholder="Rechercher dans la liste"></Input>
                            <Search></Search>
                        </div>
                    </div>
                </Card>
            </div>

            <BlogListe />
        </div>
    )
}