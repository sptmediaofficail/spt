import { DownloadData } from '../service/spt-client/types';
import { Section } from '../components/section';
import Image from 'next/image';
import GooglePlay from '../assets/images/download/google.png';
import AppStore from '../assets/images/download/apple.png';
import Phone from '../assets/images/download/phone.png';

export const DownloadSection = ({
  downloadData,
}: {
  downloadData: DownloadData;
}) => {
  return (
    <Section>
      <div
        className="bg-secondary
        lg:px-24
        px-8
       lg:py-16
       py-8
       rounded-xl flex flex-col-reverse
       relative
       "
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl text-primary font-semibold">
            {downloadData.title}
          </h2>
          <p className="text-secondaryText">{downloadData.description}</p>
          <div className="flex gap-4">
            <a href={downloadData.google_play_link} target="_blank">
              <Image src={GooglePlay} alt="Google Play" />
            </a>
            <a href={downloadData.apple_store_link} target="_blank">
              <Image src={AppStore} alt="App Store" />
            </a>
          </div>
        </div>

        <Image
          src={Phone}
          alt="App on phone"
          width={400}
          height={400}
          className="lg:absolute block left-10 -top-5"
        />
      </div>
    </Section>
  );
};
