interface ProjectCardProps {
  readonly title: string;
  readonly description: { [locale: string]: string };
  readonly image: string;
  readonly skills: string[];
  readonly source: string;
  readonly link: string;
}

interface StackCardProps {
  readonly name: string;
  readonly icon: string;
  readonly link: string;
  readonly description: { [locale: string]: string };
}
