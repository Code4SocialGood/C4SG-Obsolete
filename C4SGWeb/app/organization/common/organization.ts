export class Organization {

  constructor(
  			public id: number,
          	public name: string,
          	public logo: string,
	        public briefDescription: string,
	        public detailedDescription: string,
	        public address1: string,
	        public address2: string,
	        public state: string,
	        public country: string,
	        public createDate: string,
	        public status: string) { }
}