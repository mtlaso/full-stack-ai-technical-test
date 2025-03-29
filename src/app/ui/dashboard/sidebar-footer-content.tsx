import { signout } from "@/app/lib/actions";
import { auth } from "@/lib/auth";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/shadcn/ui/sidebar";
import { ChevronUp, User2 } from "lucide-react";
import { headers } from "next/headers";

export async function SidebarFooterContent(): Promise<React.JSX.Element> {
	const session = await auth.api.getSession({ headers: await headers() });

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton>
							<User2 /> {session?.user.name}
							<ChevronUp className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						side="top"
						className="w-[--radix-popper-anchor-width]"
					>
						<DropdownMenuItem>
							<LogOutForm />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

function LogOutForm(): React.JSX.Element {
	return (
		<form action={signout}>
			<SidebarMenuButton type="submit">Déconnexion</SidebarMenuButton>
		</form>
	);
}
