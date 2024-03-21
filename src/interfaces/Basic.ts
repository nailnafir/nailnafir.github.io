export interface AlertInterface {
  status: string;
  message: string;
}

export interface ProjectInterface {
  imagePath: string;
  title: string;
  description: string;
  tools: {
    name: string;
    iconPath: string;
  }[];
  url: string;
}

export interface SkillInterface {
  iconPath: string;
  name: string;
}

export interface PhotosInterface {
  photoPath: string;
  photoTitle: string;
}

export interface CountdownRendererInterface {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export interface CommentInterface {
  fullName: string;
  dateTime: string;
  status: string;
  comment: string;
}

export interface FloatingButtonInterface {
  colorTheme: string;
}

export interface FooterInterface {
  colorTheme: string;
}

export interface HeaderInterface {
  title: string;
  colorTheme: string;
  useDarkMode: boolean;
  listMenu: string[];
}