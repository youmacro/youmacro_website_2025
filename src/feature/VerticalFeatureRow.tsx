import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  video: string;
  poster: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="relative flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
          <video
            style={{border: "5px solid pink"}}
            width="448"
            height="252"
            controls
            title={props.title}
            poster={`${router.basePath}${props.poster}`}
            src={`${router.basePath}${props.video}`}
          >
            Your browser does not support the video tag.
          </video>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
