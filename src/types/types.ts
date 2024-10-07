export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
export type TypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export type Group = {
    fs: TypographyVariant;
    title: string;
    align?: TypographyAlign;
};