import TopNavigation from "@/components/custom/TopNavigation";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Home = async () => {

  return (
    <main className='w-full h-full'>
      <TopNavigation />
      <section className="w-full h-full flex items-center justify-center mt-16">
        <h4>No content yet!</h4>
      </section>
    </main>
  );
}

export default withPageAuthRequired(Home)