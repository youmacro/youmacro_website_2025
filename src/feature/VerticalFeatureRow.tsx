import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  video?: string;
  poster: string;
  iframeSrc?: string;
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

      <div
        className="relative flex w-full items-center justify-center sm:w-1/2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {props.iframeSrc ? (
          <iframe
            className="rounded-md border-[10px] border-solid border-blue-400"
            width="448"
            height="252"
            src={props.iframeSrc}
            title={props.title}
            allow="autoplay"
          ></iframe>
        ) : (
          props.video && (
            <video
              className="rounded-md border-[10px] border-solid border-blue-400"
              width="448"
              height="252"
              controls
              title={props.title}
              poster={`${router.basePath}${props.poster}`}
              src={`${router.basePath}${props.video}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
