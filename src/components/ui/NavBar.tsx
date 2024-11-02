"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiBell, BiMenu, BiPlus, BiPlusCircle, BiX } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { startNotificationPolling, stopNotificationPolling } from '@/lib/notificationService';
import NotificationList from "./NotificationList";
import Logo from "./Logo";


type Notification = {
  isRead: boolean;
  id: number;
  title: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  taskId: number;
  notificationType: string;

  // Add other properties as needed
};

export default function NavBar() {
	const { data: session } = useSession();

	const [open, setOpen] = useState(false)
	const [notifications, setNotifications] = useState<Notification[]>([]);

	const handleLogout = () => {
		signOut();
	};

	// const handleNotification = (notifications: any) => {
	// 	setNotifications(notifications);
	// };

	// useEffect(() => {
	// 	if (session) {
	// 		startNotificationPolling(handleNotification);
	// 		return () => {
	// 			stopNotificationPolling();
	// 		};
	// 	}
	// }, [session]);

	return (
		<>
		
		{ open && (
		     <div className="bg-gray-100 z-30 fixed w-full h-screen p-2">
		     <div className="p-4 w-full ">
		       <BiX onClick={() => setOpen(!open)} className="text-3xl inline " />
		       <button className="-my-2 inline rounded-full p-3 float-right bg-primary text-white"> Post A Task </button>
		     </div>
		     <div className="w-full">
		       <ul className="p-4">
		         <li className="py-3">Browse Category for Taskers</li>
		         <li className="py-3">Browse Category for Posters</li>
		         {!session ? (
		           <>
		             <Link href="/login"><li className="py-3">Log in</li></Link>
		             <Link href="/register"><li className="py-3">Join Giga </li></Link>
		           </>
		         ) : (
		           <li className="py-3" onClick={handleLogout}>Logout</li>
		         )}
		         <Link href="/gigs"><li className="py-3">Browse tasks</li></Link>
		         <li className="py-3">How it works</li>
		         <li className="py-3">Community guidelines</li>
		         <li className="py-3">Help</li>
		         <li className="py-3">Terms & Conditions</li>
		         <li className="py-3">Privacy Policy</li>
		         <li className="py-3">Contact us</li>
		         <li className="py-3">About us</li>
		       </ul>
		     </div>
		     </div>
		)}

	   
	   <nav className="bg-white p-4 border-b w-full">
	       <div className="float-left w-16 mr-6 inline-block">
	           {/* insert a hamburger icon */}
	         
	           <BiMenu onClick={() => setOpen(!open)} className="text-3xl text-slay-300"/>
	          
	       </div>
	       <div className="inline-block text-center  w-1/2 mx-auto">
	           {/* insert logo here */}
	           {/* <Link href={'/'}> <h1 className="text-2xl text-primary  font-extrabold">GIGA</h1></Link> */}
	           {/* <Image src={'/GIGA2.png'} alt={"Profile picture"} height={100} width={100} priority className=" object-contain  text-2xl  mx-auto"/> */}
			<Logo className="text-2xl"/>
	       </div>
       <div className="absolute top-0 right-0 flex items-center space-x-2 p-4">
           {/* {session ? (
               <NotificationList notifications={notifications} />
           ) : (
               <></>
           )} */}
           {/* insert add task here */}
           <Link href={'/post-task'}>
               <BiPlusCircle className="text-3xl text-primary" />
           </Link>
       </div>
	   </nav>
	   </>
	)

}
