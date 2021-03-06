import ColdBrew from '../src/coldbrew'
import { expect } from 'chai'

describe('ColdBrew#caffeinate', () => {
  let coldBrew

  before('set up test', () => {
    coldBrew = new ColdBrew()
  })

  it('should keep empty string', () => {
    expect(coldBrew.caffeinate('')).to.equal('')
  })

  it('should replace vowel with coffee', () => {
    expect(coldBrew.caffeinate('a')).to.equal('coffee')
    expect(coldBrew.caffeinate('e')).to.equal('coffee')
    expect(coldBrew.caffeinate('i')).to.equal('coffee')
    expect(coldBrew.caffeinate('o')).to.equal('coffee')
    expect(coldBrew.caffeinate('u')).to.equal('coffee')
  })

  it('should keep consonants', () => {
    expect(coldBrew.caffeinate('b')).to.equal('b')
  })

  it('should replace a vowel in a word with coffee', () => {
    expect(coldBrew.caffeinate('ab')).to.equal('coffeeb')
    expect(coldBrew.caffeinate('ba')).to.equal('bcoffee')
  })

  it('should replace contiguous vowels with a single coffee', () => {
    expect(coldBrew.caffeinate('aa')).to.equal('coffee')
    expect(coldBrew.caffeinate('ae')).to.equal('coffee')
  })

  it('should keep contiguous consonants', () => {
    expect(coldBrew.caffeinate('bc')).to.equal('bc')
  })

  it('should be case insensitive', () => {
    expect(coldBrew.caffeinate('A')).to.equal('coffee')
    expect(coldBrew.caffeinate('B')).to.equal('B')
    expect(coldBrew.caffeinate('And')).to.equal('coffeend')
  })

  it('should only replace vowels if more than 30% of the word are vowels', () => {
    expect(coldBrew.caffeinate('his')).to.equal('hcoffees')
    expect(coldBrew.caffeinate('tea')).to.equal('tcoffee')
    expect(coldBrew.caffeinate('bbba')).to.equal('bbba')
  })
})
