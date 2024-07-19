"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Shreesha",
        avatar: "S",
        title: "Software Engineer",
        description: "This is the best I have used!"
    },
    {
        name: "Yashas Y",
        avatar: "Y",
        title: "Business Analyst",
        description: "NextLear Pro is really up to it's name. Warp Speed indeed!"
    },
    {
        name: "Gautham B U",
        avatar: "G",
        title: "Lawyer",
        description: "I cannot believe a tool can be this fast and efficient! Great job..."
    },
    {
        name: "Chiranth P",
        avatar: "C",
        title: "Engineer at Google",
        description: "The navigation around NexLear is really simple and user friendly..."
    },
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none test-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text lg text-white">
                                        {item.name}
                                    </p>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0 text-white">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}