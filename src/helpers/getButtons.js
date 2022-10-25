const getButtons = async (i, content, components, action) => {
  await i.deferUpdate();

  i.editReply({
    content: content,
    components: components,
  });

  action;
};

module.exports = getButtons;
