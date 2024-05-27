"use client"
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

export const ChatHeader = ({user}: {user:User | undefined}) => {

  const router = useRouter()

  const handleLoginWithGithub = () => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo:location.origin + "/auth/callback"
      }
    });
  }

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <div className="p-5 border-b flex flex-row items-center justify-between h-20">
      
      <div>
        <h1 className="text-xl font-bold">Daily Chat</h1>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
          <h1 className="text-sm text-gray-400">2 online</h1>
        </div>
      </div>

      {user ? 
        <Button onClick={handleLogout}>Logout</Button> 
      : 
        <Button onClick={handleLoginWithGithub}>Login</Button>
      }

    </div>
  )
}
