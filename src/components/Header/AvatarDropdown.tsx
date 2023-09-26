import { Popover, Transition } from "@headlessui/react";
import {
  UserCircleIcon,
  AnnotationIcon,
  HeartIcon,
  HomeIcon,
  LogoutIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import Avatar from "shared/Avatar/Avatar";
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';
const cookies = new Cookies();
	let ownerid=cookies.get('ownerid');
  let travellerid=cookies.get('travellerid');
  //alert(ownerid);

const solutions = [
  {
    name: "Account",
    href: "/account",
    icon: UserCircleIcon,
  },
  {
    name: "Messages",
    href: "##",
    icon: AnnotationIcon,
  },
  {
    name: "Wishlists",
    href: "##",
    icon: HeartIcon,
  },
  
];

const solutionsFoot = [
  {
    name: "Help",
    href: "##",
    icon: SupportIcon,
  },

  
];

export default function AvatarDropdown() {
  const logout = (e) => {

    cookies.remove('ownerid');
    cookies.remove('travellerid');
    window.location.href = '/';
    return false;
}
let button;
if(ownerid==undefined && travellerid==undefined)
{
  button='';
}
else
{
  button=<Link
  to={logout}
  className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
>
  <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
    <LogoutIcon aria-hidden="true" className="w-6 h-6" />
  </div>
  <div className="ml-4">
    <p className="text-sm font-medium ">logout</p>
  </div>
</Link>;
}
let loginmenu;
if(ownerid==undefined)
{
 loginmenu=<Link
 to='/login'
 className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
>
 <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
   <LogoutIcon aria-hidden="true" className="w-6 h-6" />
 </div>
 <div className="ml-4">
   <p className="text-sm font-medium ">Owner Login</p>
 </div>
</Link>
}
else
{
  loginmenu=<Link
  to='/account'
  className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
 >
  <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
    <UserCircleIcon aria-hidden="true" className="w-6 h-6" />
  </div>
  <div className="ml-4">
    <p className="text-sm font-medium ">Account</p>
  </div>
 </Link>
}

let travellermenu;
if(travellerid==undefined && ownerid==undefined)
{
  travellermenu=<Link
 to='/Traveller-login'
 className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
>
 <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
   <LogoutIcon aria-hidden="true" className="w-6 h-6" />
 </div>
 <div className="ml-4">
   <p className="text-sm font-medium ">Traveller Login</p>
 </div>
</Link>
}
else
{
  if(travellerid!=undefined)
  {
  travellermenu=<Link
  to='/account-traveller'
  className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
 >
  <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
    <UserCircleIcon aria-hidden="true" className="w-6 h-6" />
  </div>
  <div className="ml-4">
    <p className="text-sm font-medium ">Account</p>
  </div>
 </Link>
  }
}
let avataricon;
if(travellerid==undefined && ownerid==undefined)
{
  avataricon=<i class="las la-user text-lg"></i>
}
else
{
  avataricon=<i class="las la-user text-lg"></i>
}
  return (
    <div className="AvatarDropdown">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
             
              {avataricon}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-[260px] px-4 mt-3 -right-10 sm:right-0 sm:px-0">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-white dark:bg-neutral-800 p-7">
                   {loginmenu}
                   {travellermenu}
                  </div>
                  <hr className="h-[1px] border-t border-neutral-300 dark:border-neutral-700" />
                  <div className="relative grid gap-6 bg-white dark:bg-neutral-800 p-7">
                    {solutionsFoot.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                          <item.icon aria-hidden="true" className="w-6 h-6" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium ">{item.name}</p>
                        </div>
                      </a>
                    ))}
                   
                  
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
