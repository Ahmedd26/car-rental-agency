export interface IReview {
  id: number;
  user: {
    name: string;
    title: string;
    company: string;
    photo: string;
  };
  rating: number;
  date: string | Date;
  review: string;
}
