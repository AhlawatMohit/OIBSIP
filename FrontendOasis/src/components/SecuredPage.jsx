
function SecuredPage() {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
        }

  return (
   <>
      <div className="w-screen h-screen bg-[#FFF5C2]">
<nav className="w-full h-16 bg-zinc-700 flex items-center justify-center xl:space-x-[72rem] md:space-x-[35rem] sm:space-x-3">
<h1 className="text-[#7BD3EA]">Mohit Ahlawat</h1>
<button className="rounded-full px-6 py-2 bg-[#7BD3EA] hover:bg-[#39A7FF]" onClick={handleLogout}>
Logout
</button>
</nav>
<div className="flex items-center justify-center mt-[18rem] space-x-20 md:space-x-10">
<a className="hover:text-[#FF9130]" href='https://ahlawatmohit.github.io/PortfolioNew/'>Portfolio Live Link</a>
<div className="flex items-center justify-center">
<a className="hover:text-[#FF9130]" href='https://oasisinfobyte.com'>Oasis Infobyte WebSite</a>
</div>
</div>
    </div>
   </>
  )
}

export default SecuredPage
