export interface Project {
  title: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  description: string;
  links: {
    git: {
      text: string;
      url: string;
    };
    site: {
      text: string;
      url: string;
    };
  };
}