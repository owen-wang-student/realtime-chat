import { ChatHeader } from "@/components/ChatHeader"
import { InitUser } from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";

import { Input } from "@/components/ui/input";

export default async function Page() {

	const supabase = await supabaseServer();
	const { data } = await supabase.auth.getSession();
  console.log(data.session?.user)


  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col">
          
          <ChatHeader user={data.session?.user}/>

          <div className="flex-1 flex flex-col p-5 h-full overflow-auto">
            <div className="flex-1">

            </div>

            <div className="space-y-7">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => (
                <div className="flex flex-row gap-2" key={value}>
                  <div className="h-10 w-10 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex flex-row items-center gap-1">
                      <h1 className="font-bold">owen._.wang</h1>
                      <h1 className="text-sm text-gray-400">{new Date().toDateString()}</h1>
                    </div>
                    <p className="text-gray-300">
                      Displays a form input field or a component that looks like an input field.Displays a form input field or a component that looks like an input field.
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

          <div className="p-5">
            <Input placeholder="send message"/>
          </div>

        </div>
      </div> 

      <InitUser user={data.session?.user} />

    </>
  )
}
