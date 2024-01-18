declare module "*.ejs" {
  const value: {
    (data?: object): string;
    source: string;
  };
  export default value;
}