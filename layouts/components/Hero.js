import { useGetFromUserQuery } from "redux/apis/unsplash";
import Spinner from "./Spinner";
const Hero = () => {
  const { data, isLoading, error } = useGetFromUserQuery();
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-2/3 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-6xl">
          Inovasi teknologi untuk masa depan yang lebih baik.
          </h1>
          <p className="mb-8 leading-relaxed">
            Mari berbagi pengalaman di dunia programming.
          </p>
        </div>
        <div className="w-5/6 md:w-1/3 lg:w-full lg:max-w-lg">
          {isLoading ? (
            <Spinner />
          ) : (
            <figure className="max-w-lg p-4">
              <img
                className="h-auto max-w-full rounded-lg"
                src={data?.urls?.regular}
                alt="unsplash"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                From Unsplash
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
