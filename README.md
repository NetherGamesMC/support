# Support Helpdesk

This is the codebase for the NetherGames Network helpdesk. The helpdesk can be modified or added to by anyone who thinks it can be improved (whether you're a staff member or a member of the community!).

## Creating a new helpdesk page

To create a new helpdesk page, you will need to create a pull request as seen [here](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

Then, to create a new page, you will need to create a new file in the support/docs folder [here](https://github.com/NetherGamesMC/support/tree/master/docs). The new file should be named "title-of-page.md". To keep consistency throughout the helpdesk, the name of the file must match the header/title in the file.

Once you've create a new file. You can start adding information. Remember that you must have a header `# Title of Page` at the top. Then, you can follow the markdown format guide [here](https://vitepress.dev/guide/markdown), or just copy the style of formatting from another helpdesk article.

Please aim to keep the formating style consistent with all other pages on the helpdesk.

After you've filled out the new page, submit the pull request and it will be reviewed by an Admin.

Note to admin: When approving the pull request, you must add a reference for the new page at index.md

## Updating an existing helpdesk page

You can update any existing helpdesk page, just click on the edit button in the top right corner! You will then need to submit it as a pull request for review.

## Rules for published articles

1. Titles use uppercase for important words. E.g: "Applying for Staff" "Appealing a Punishment"
2. Titles and links match. E.g `# Applying for Staff` header must be on the file called `applying-for-staff.md` (exception is that `&` is substituted for `and`
3. The use of `&` in title headings is prefereed. E.g `Credits & Tiers` rather than `Credits and Tiers`
4. Numbered & bullet point lists do not have full stops at the end
5. Info boxes always have full stops at the end
6. Links such as `ngmc.co/request` should always be hyperlinked like `[ngmc.co/request](https://ngmc.co/request)`
7. Articles should try to provide steps on a topic (even if it is easy), rather than just linking to another page. For example, the applying for staff article explains the steps of applying for staff on the portal, rather than just saying to go to ngmc.co/requests
