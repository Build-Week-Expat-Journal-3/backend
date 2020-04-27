exports.seed = function (knex) {
  return knex("post").insert([
    {
      img_url:
        "https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story: "Venice, Italy",
      user_id: 1,
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1493527581643-f0817e264564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story: "Iguana in Sayulita, Mexico",
      user_id: 1,
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1490218456693-d7666a02f876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story: "Parakeets in Leon Department, Nicaragua",
      user_id: 1,
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1585660024633-321c071185ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story: "School children in Stone Town, Zanzibar, Tanzania",
      user_id: 2,
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1558907530-fe311178388a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story: "Farmer's market in Lamu, Kenya",
      user_id: 2,
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story: "City of Shibuya, Japan",
      user_id: 2,
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1569832856136-5f42d6a3ed67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story: "Hiking on Mount Elbrus, Kabardino-Balkaria, Russia",
      user_id: 3,
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1570287893361-a756968ca6fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story:
        "People protesting in Seoul, South Korea during the impeachment of former president, Park Geun-Hye.",
      user_id: 3,
    },
    {
      img_url:
        "https://images.unsplash.com/photo-1570030289513-f44af3cd0944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
      story: "Outdoor climbing in Frankenjura, Germany",
      user_id: 3,
    },
  ]);
};
