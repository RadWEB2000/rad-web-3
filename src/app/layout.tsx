import type { Metadata } from "next";
import "css/Global.scss";
import ExpandMenuProvider from "context/ExpandMenuContext";
import { Footer,Navigation } from "layout/index";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ExpandMenuProvider>
      <body>
        <Navigation
           bar={{
            brand:{
              label:"RadWEB",
              lang:"pl",
              uri:"/"
            },
            menu: [
               {
                label:"Start",
                uri:"#"
               },
               {
                label:"O nas",
                uri:"#"
               },
               {
                label:"Blog",
                uri:"#"
               },
               {
                label:"Usługi",
                uri:"#"
               },
               {
                label:"Projekty",
                uri:"#"
               },
               {
                label:"Case study",
                uri:"#"
               },
               {
                label:"Słownik",
                uri:"#"
               },
               {
                label:"Kontakt",
                uri:"#"
               },
            ]
          }}
          menu={{
            blog: [
              {
                label:"Programowanie",
                uri:"#"
              },
              {
                label:"Pozycjonowanie",
                uri:"#"
              },
              {
                label:"Systemy operacyjne",
                uri:"#"
              },
              {
                label:"Videomaking",
                uri:"#"
              },
              {
                label:"Copywriting",
                uri:"#"
              },
              {
                label:"Social media",
                uri:"#"
              },
            ],
            menu:[
              {
                label:"Start",
                uri:"#"
              },
              {
                label:"O nas",
                uri:"#",
                submenu:[
                  {
                    label:"Radosław Adamczyk",
                    uri:"#"
                  },
                  {
                    label:"Filip Bukowiecki",
                    uri:"#"
                  }
                ]
              },
              {
                label:"Blog",
                uri:"#",
                submenu: [
                  {
                    label:"Programowanie",
                    uri:"#"
                  },
                  {
                    label:"Pozycjonowanie",
                    uri:"#"
                  },
                  {
                    label:"Systemy operacyjne",
                    uri:"#"
                  },
                  {
                    label:"Videomaking",
                    uri:"#"
                  },
                  {
                    label:"Copywriting",
                    uri:"#"
                  },
                  {
                    label:"Social media",
                    uri:"#"
                  },
                ]
              },
              {
                label:"Usługi",
                uri:"#",
                submenu:[
                  {
                    label:"Strony internetowe",
                    uri:"#"
                  },
                  {
                    label:"SEO",
                    uri:"#"
                  },
                  {
                    label:"Copywriting",
                    uri:"#"
                  },
                  {
                    label:"Videomaking",
                    uri:"#"
                  }
                ]
              },
              {
                label:"Projekty",
                uri:"#"
              },
              {
                label:"Case study",
                uri:"#"
              },
              {
                label:"Słownik",
                uri:"#"
              },
              {
                label:"Kontakt",
                uri:"#"
              },
            ]
          }}
        />
        {children}
        <Footer
          author={{
            brand:"RadWEB",
            year:{
              end: new Date().getFullYear(),
              start:2016
            }
          }}
          brand={{
            brand:"RadWEB",
            slogan:"Usługi marketingu online"
          }}
          menu={{
            columns:[
              {
                title:"Informacje",
                items:[
                  {
                    label:"Start",
                    uri:"#"
                  },
                  {
                    label:"O nas",
                    uri:"#"
                  },
                  {
                    label:"Blog",
                    uri:"#"
                  },
                  {
                    label:"Projekty",
                    uri:"#"
                  },
                  {
                    label:"Case study",
                    uri:"#"
                  }
                ]
              },
              {
                title:"Wiedza",
                items:[
                  {
                    label:"Programowanie",
                    uri:"#"
                  },
                  {
                    label:"Pozycjonowanie",
                    uri:"#"
                  },
                  {
                    label:"Systemy operacyjne",
                    uri:"#"
                  },
                  {
                    label:"Copywriting",
                    uri:"#"
                  },
                  {
                    label:"Social Media",
                    uri:"#"
                  },
                  {
                    label:"Videomaking",
                    uri:"#"
                  },
                ]
              },
              {
                title:"Kontakt",
                items:[
                  {
                    label:"Kontakt",
                    uri:"#"
                  },
                  {
                    label:"Polityka prywatności",
                    uri:"#"
                  },
                  {
                    label:"Polityka cookie",
                    uri:"#"
                  },
                  {
                    label:"Regulamin",
                    uri:"#"
                  },
                ]
              },
              {
                title:"Kontakt",
                items:[
                  {
                    label:"Kontakt",
                    uri:"#"
                  },
                  {
                    label:"Polityka prywatności",
                    uri:"#"
                  },
                  {
                    label:"Polityka cookie",
                    uri:"#"
                  },
                  {
                    label:"Regulamin",
                    uri:"#"
                  },
                ]
              },
            ]
          }}
        />
      </body>
      </ExpandMenuProvider>
    </html>
  );
}
