// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import {
  AiFillTwitterCircle,
  AiOutlineMenu,
  AiFillCalendar,
  AiFillFolderOpen,
  AiOutlineLink,
  AiFillSetting,
} from "react-icons/ai";

const JsonPreview = ({ document }) => (
  <>
    <h1>JSON Data for "{document.displayed.title}"</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
);

export const getDefaultDocumentNode = ({ documentId, schemaType }) => {
  if (
    (schemaType === "page",
    "events" ||
      documentId === "siteSettings" ||
      schemaType === "events" ||
      schemaType === "socialSettings")
  ) {
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title("JSON"),
    ]);
  }
};

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("General Settings")
        .icon(AiFillSetting)
        .child(
          S.editor().schemaType("siteSettings").documentId("siteSettings")
        ),

      S.listItem()
        .title("Nav Menus")
        .icon(AiOutlineLink)
        .child(
          S.list()
            .title("./nav-menus")
            .items([
              S.documentTypeListItem("navMenu")
                .title("Menus")
                .icon(AiOutlineMenu),
              S.documentTypeListItem("socials")
                .title("Socials")
                .icon(AiFillTwitterCircle),
            ])
        ),

      S.divider(),

      S.listItem()
        .title("Pages")
        .icon(AiFillFolderOpen)
        .child(S.documentTypeList("page").title("./pages")),

      S.divider(),

      S.listItem()
        .title("Events")
        .icon(AiFillCalendar)
        .child(S.documentTypeList("events").title("./events")),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "page",
            "eventsList",
            "navMenu",
            "navList",
            "cardsList",
            "specsList",
            "cta",
            "navLink",
            "socials",
          ].includes(listItem.getId())
      ),
    ]);
