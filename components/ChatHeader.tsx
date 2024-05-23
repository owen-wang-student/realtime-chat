"use client"
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser"

export const ChatHeader = () => {

  const handleLoginWithGithub = () => {
    const supabase = supabaseBrowser()
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo:location.origin + "/auth/callback"
      }
    })
  }

  return (
    <div className="h-20">
      <div className="p-5 border-b flex flex-row items-center justify-between">
        
        <div>
          <h1 className="text-xl font-bold">Daily Chat</h1>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            <h1 className="text-sm text-gray-400">2 online</h1>
          </div>
        </div>

        <Button onClick={handleLoginWithGithub}>Login</Button>

      </div>
    </div>
  )
}
